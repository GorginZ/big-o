#!/usr/bin/env bash
die() { echo “${1:-something went wrong}“; exit “${2:-1}“; }

hash curl || die "curl not found"

endpoint='http://server/' 

##happy path
curl $endpoint || die "could not get root" \




