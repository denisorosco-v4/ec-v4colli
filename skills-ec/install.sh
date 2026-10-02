#!/usr/bin/env bash
# Instala as skills de Estruturação Comercial (E.C.) no Claude Code desta máquina.
# Copia cada pasta em ./skills/ para ~/.claude/skills/

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_ROOT="$SCRIPT_DIR/skills"
TARGET_ROOT="$HOME/.claude/skills"

if [ ! -d "$SOURCE_ROOT" ]; then
  echo "ERRO: pasta 'skills' não encontrada ao lado deste script." >&2
  exit 1
fi

mkdir -p "$TARGET_ROOT"

installed=()
updated=()

for dir in "$SOURCE_ROOT"/*/; do
  name="$(basename "$dir")"
  dest="$TARGET_ROOT/$name"
  if [ -d "$dest" ]; then
    rm -rf "$dest"
    updated+=("$name")
  else
    installed+=("$name")
  fi
  cp -R "$dir" "$dest"
done

echo ""
echo "==================================================="
echo " Instalação concluída em: $TARGET_ROOT"
echo "==================================================="
echo ""
echo "Skills novas instaladas (${#installed[@]}):"
for s in "${installed[@]}"; do echo "  + $s"; done
echo ""
echo "Skills existentes atualizadas (${#updated[@]}):"
for s in "${updated[@]}"; do echo "  ~ $s"; done
echo ""
echo "Reinicie o Claude Code (ou abra uma nova sessão) para que as skills apareçam."
echo ""
echo "Lembrete de pré-requisitos:"
echo "  - /ec-exportar-docx precisa de Node.js + 'npm install -g docx'"
echo "  - /ec-forecast-comercial precisa de Node.js + 'npm install -g exceljs'"
echo "  - /v4-slides precisa de Node.js + 'npm install -g pptxgenjs'"
echo "  - /ec-visual-style precisa do Pandoc; /ec-poc e /ec-visual-style têm caminhos locais a ajustar"
