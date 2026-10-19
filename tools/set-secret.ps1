# set-secret.ps1 - put a Worker secret from the clipboard, never shown on screen.
#   Copy the key in Stripe (use the Copy button), then run:
#   & "D:\Paul's PC2\Documents\Claude Projects\Core_Memory\Projects\nexstudents\nexstudents.org\tools\set-secret.ps1" STRIPE_WEBHOOK_SECRET
# Checks the start of the key so the wrong thing on the clipboard is caught first.
param([Parameter(Mandatory = $true)][string]$Name)

$want = @{ STRIPE_WEBHOOK_SECRET = 'whsec_'; STRIPE_SECRET_KEY = 'sk_live_' }
# Copying this command line overwrites the clipboard, so wait for the key to be copied AFTER.
Write-Host "Now copy the $Name key in Stripe, then come back here and press Enter." -ForegroundColor Yellow
[void](Read-Host)
$key = (Get-Clipboard -Raw).Trim()

if ($want.ContainsKey($Name) -and -not $key.StartsWith($want[$Name])) {
  Write-Host "Stopped: the clipboard does not start with $($want[$Name]). Copy the key again." -ForegroundColor Red
  exit 1
}
if ($key -match '\*|•') {
  Write-Host "Stopped: that is the masked key. Use Stripe's Copy button or the eye icon first." -ForegroundColor Red
  exit 1
}

$key | wrangler secret put $Name --name nexstudents-media
if ($LASTEXITCODE -eq 0) { Write-Host "$Name is set." -ForegroundColor Green }
Set-Clipboard -Value ' '
