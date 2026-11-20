$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$workspaceRoot = Split-Path $PSScriptRoot -Parent
$mediaOutput = Join-Path $workspaceRoot 'public/media'
New-Item -ItemType Directory -Path $mediaOutput -Force | Out-Null
$manifest = @{
  'forest' = 'forest-source.jpg'
  'refinery' = 'red-shuheart-Wb4vcBqyGT8-unsplash.jpg'
  'offshore' = 'zach-theo-guADzpF9pDI-unsplash.jpg'
  'shipping' = 'j-f-manzanero-0eqs4wjebyc-unsplash.jpg'
  'port' = 'maria-lupan-hy97yy3e03A-unsplash.jpg'
  'wind' = 'arno-senoner-SVO98wCEAME-unsplash.jpg'
  'workers' = 'aldward-castillo-wbRVsqNtDpk-unsplash.jpg'
  'power' = 'scott-webb-RQJpfyUyZ-o-unsplash.jpg'
  'retail' = 'engin-akyurt-nipgFe8mWB8-unsplash.jpg'
  'history' = 'semen-zhuravlev-gtZ7xkuF1RE-unsplash.jpg'
  'fieldwork' = 'abdolhassan-fazeli-T4OhUmACbfo-unsplash.jpg'
  'onshore' = 'yuan-chen-wFJCdcjXrxU-unsplash.jpg'
  'marine' = 'kajetan-sumila-ng3lS6LtQNk-unsplash.jpg'
  'offshore-sunset' = 'gabriel-xavier-uo0C58mJ3Mc-unsplash.jpg'
}
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]84)
function Resize-Photo($source, $target, $width) {
  $im = [System.Drawing.Image]::FromFile($source)
  try {
    $outWidth = [int][Math]::Min($width, $im.Width)
    $outHeight = [int][Math]::Round($im.Height * $outWidth / $im.Width)
    $bitmap = New-Object System.Drawing.Bitmap($outWidth, $outHeight)
    $g = [System.Drawing.Graphics]::FromImage($bitmap)
    try {
      $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $g.DrawImage($im, 0, 0, $outWidth, $outHeight)
      $bitmap.Save($target, $encoder, $encoderParams)
    } finally { $g.Dispose(); $bitmap.Dispose() }
  } finally { $im.Dispose() }
}
foreach ($entry in $manifest.GetEnumerator()) {
  foreach ($width in @(640, 1200, 1920)) {
    Resize-Photo (Join-Path $workspaceRoot ('.work/incoming/' + $entry.Value)) (Join-Path $mediaOutput ($entry.Key + '-' + $width + '.jpg')) $width
  }
}
foreach ($person in @('femi','amina')) {
  Resize-Photo (Join-Path $workspaceRoot ('.work/portraits/' + $person + '.png')) (Join-Path $mediaOutput ($person + '-portrait.jpg')) 700
}
foreach ($portrait in (Get-ChildItem (Join-Path $workspaceRoot '.work/portraits') -File)) {
  Resize-Photo $portrait.FullName (Join-Path $mediaOutput ($portrait.BaseName + '-portrait.jpg')) 700
}
$logo = [System.Drawing.Image]::FromFile((Join-Path $workspaceRoot 'public/brand/monogram.png'))
try {
  foreach ($size in @(64,180,192,512)) {
    $icon = New-Object System.Drawing.Bitmap($size,$size)
    $g = [System.Drawing.Graphics]::FromImage($icon)
    $g.Clear([System.Drawing.ColorTranslator]::FromHtml('#222725'))
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.DrawImage($logo,[int]($size*.09),[int]($size*.09),[int]($size*.82),[int]($size*.82*$logo.Height/$logo.Width))
    $icon.Save((Join-Path $workspaceRoot ('public/brand/icon-' + $size + '.png')),[System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose();$icon.Dispose()
  }
  $card = New-Object System.Drawing.Bitmap(1200,630)
  $g = [System.Drawing.Graphics]::FromImage($card)
  $g.Clear([System.Drawing.ColorTranslator]::FromHtml('#222725'))
  $g.DrawImage($logo,75,75,160,120)
  $headingFont = New-Object System.Drawing.Font('Arial',56,[System.Drawing.FontStyle]::Regular)
  $brandFont = New-Object System.Drawing.Font('Arial',26,[System.Drawing.FontStyle]::Bold)
  $smallFont = New-Object System.Drawing.Font('Arial',13)
  $whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#F7F7F2'))
  $sageBrush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml('#E4E6C3'))
  $g.DrawString('blacksand',$brandFont,$whiteBrush,240,115)
  $g.DrawString("Energy for`nwhat comes next.",$headingFont,$whiteBrush,90,250)
  $g.DrawString('NIGERIAN ROOTS. GLOBAL OUTLOOK.',$smallFont,$sageBrush,96,548)
  $card.Save((Join-Path $workspaceRoot 'public/brand/social-card.png'),[System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose();$card.Dispose();$headingFont.Dispose();$brandFont.Dispose();$smallFont.Dispose();$whiteBrush.Dispose();$sageBrush.Dispose()
} finally { $logo.Dispose(); $encoderParams.Dispose() }
Write-Output 'Prepared responsive photography, named portraits, favicon sizes and social sharing image.'
