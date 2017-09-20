#!/bin/sh

aws --profile propr s3 sync --exclude '.DS_Store/*' --exclude 'sync.sh' --exclude '.git/*' . s3://propr.tech/expshrunk

# TODO

# max-age=86400 where appropriate
