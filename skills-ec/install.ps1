#Requires -Version 5.1
<#
  Instala as skills de Estruturação Comercial (E.C.) no Claude Code desta máquina.
  Copia cada pasta em .\skills\ para %USERPROFILE%\.claude\skills\
#>

$ErrorActionPreference = "Stop"

$sourceRoot = Join-Path $PSScriptRoot "skills"
$targetRoot = Join-Path $env:USERPROFILE ".claude\skills"

if (-not (Test-Path $sourceRoot)) {
    Write-Host "ERRO: pasta 'skills' nao encontrada ao lado deste script." -ForegroundColor Red
    exit 1
}

if (-not (Test-Path $targetRoot)) {
    New-Item -ItemType Directory -Force -Path $targetRoot | Out-Null
    Write-Host "Criado diretorio de skills: $targetRoot"
}

$skillDirs = Get-ChildItem -LiteralPath $sourceRoot -Directory
$installed = @()
$updated = @()

foreach ($dir in $skillDirs) {
    $dest = Join-Path $targetRoot $dir.Name
    $existed = Test-Path $dest
    if ($existed) {
        Remove-Item -LiteralPath $dest -Recurse -Force
    }
    Copy-Item -LiteralPath $dir.FullName -Destination $dest -Recurse -Force

    if ($existed) { $updated += $dir.Name } else { $installed += $dir.Name }
}

Write-Host ""
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host " Instalacao concluida em: $targetRoot" -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Skills novas instaladas ($($installed.Count)):" -ForegroundColor Green
$installed | Sort-Object | ForEach-Object { Write-Host "  + $_" }
Write-Host ""
Write-Host "Skills existentes atualizadas ($($updated.Count)):" -ForegroundColor Yellow
$updated | Sort-Object | ForEach-Object { Write-Host "  ~ $_" }
Write-Host ""
Write-Host "Reinicie o Claude Code (ou abra uma nova sessao) para que as skills apareçam."
Write-Host ""
Write-Host "Lembrete de pre-requisitos:" -ForegroundColor Cyan
Write-Host "  - /ec-exportar-docx precisa de Node.js + 'npm install -g docx'"
Write-Host "  - /ec-forecast-comercial precisa de Node.js + 'npm install -g exceljs'"
Write-Host "  - /v4-slides precisa de Node.js + 'npm install -g pptxgenjs'"
Write-Host "  - /ec-visual-style precisa do Pandoc; /ec-poc e /ec-visual-style tem caminhos locais a ajustar"
