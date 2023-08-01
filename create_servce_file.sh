#!/bin/bash

cat <<EOF
[Unit]
Description=myapp1 - NodeJS server, NextJS public frontend
After=network.target

[Service]
Type=simple
User=$(id -u)
Group=$(id -g)
Restart=on-failure
RestartSec=10
WorkingDirectory=$(pwd -P)
# ExecStartPre=/usr/bin/pnpm install
# ExecStartPre=/usr/bin/pnpm run build
ExecStart=/usr/bin/pnpm next start

[Install]
WantedBy=multi-user.target
EOF
