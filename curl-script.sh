#!/usr/bin/env bash
die() { echo “${1:-something went wrong}“; exit “${2:-1}“; }

# hash jq || die "jq not found"
hash curl || die "curl not found"


# endpoint='http://localhost/' 
endpoint='http://server/' 

# endpoint='http://server_1/' 


##happy path
curl $endpoint || die "could not get root" \




