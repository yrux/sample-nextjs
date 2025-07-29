#!/bin/bash
# Usage: ./deploy.sh --environment-id <envId> --branch <branch> --client-id <CLIENT_ID> --client-secret <CLIENT_SECRET>
# OR
# Usage: ./deploy.sh --environment-id=<envId> --branch=<branch> --client-id=<CLIENT_ID> --client-secret=<CLIENT_SECRET>
set -e

# Initialize variables
environmentId=""
branch=""
CLIENT_ID=""
CLIENT_SECRET=""

# Function to display usage
usage() {
    echo "Usage: $0 --environment-id <envId> --branch <branch> --client-id <CLIENT_ID> --client-secret <CLIENT_SECRET>"
    echo "   or: $0 --environment-id=<envId> --branch=<branch> --client-id=<CLIENT_ID> --client-secret=<CLIENT_SECRET>"
    echo ""
    echo "Options:"
    echo "  --environment-id  Environment ID for deployment"
    echo "  --branch          Git branch to deploy"
    echo "  --client-id       OAuth client ID"
    echo "  --client-secret   OAuth client secret"
    echo "  -h, --help        Show this help message"
    echo ""
    echo "Note: You can use either --flag value or --flag=value format"
    exit 1
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --environment-id=*)
            environmentId="${1#*=}"
            shift
            ;;
        --environment-id)
            environmentId="$2"
            shift 2
            ;;
        --branch=*)
            branch="${1#*=}"
            shift
            ;;
        --branch)
            branch="$2"
            shift 2
            ;;
        --client-id=*)
            CLIENT_ID="${1#*=}"
            shift
            ;;
        --client-id)
            CLIENT_ID="$2"
            shift 2
            ;;
        --client-secret=*)
            CLIENT_SECRET="${1#*=}"
            shift
            ;;
        --client-secret)
            CLIENT_SECRET="$2"
            shift 2
            ;;
        -h|--help)
            usage
            ;;
        *)
            echo "Unknown option: $1"
            usage
            ;;
    esac
done

# Check for missing parameters
if [[ -z "$environmentId" || -z "$branch" || -z "$CLIENT_ID" || -z "$CLIENT_SECRET" ]]; then
    echo "Error: All parameters are required."
    echo ""
    usage
fi

AUTH_SERVER_URL="https://accountsstg.network.acquia-sites.com/api/auth/oauth/token"
CODE_DEPLOYMENT_URL="https://n3stg.network.acquia-sites.com/api/environments/${environmentId}/code/actions/switch"

# Obtain access token
response=$(curl --silent -L --request POST \
  --url "${AUTH_SERVER_URL}" \
  --header "content-type: application/x-www-form-urlencoded" \
  --data grant_type=client_credentials \
  --data client_id="${CLIENT_ID}" \
  --data-urlencode client_secret="${CLIENT_SECRET}")

# Check if there was an error in the response
if [[ "$response" == *"error"* ]]; then
  echo "Error in obtaining token:"
  echo "$response"
  exit 1
fi

# Extract the access token from the JSON response
access_token=$(echo "$response" | jq -r .access_token)

echo "Access token obtained."
echo "Deployment URL: $CODE_DEPLOYMENT_URL"

# Trigger code deployment
response=$(curl --silent -X POST "${CODE_DEPLOYMENT_URL}" \
  -H "Authorization: Bearer $access_token" \
  -H "Content-Type: application/json" \
  -H "Accept: application/hal+json" \
  -d "{
    \"branch\": \"$branch\"
  }")

echo "Deployment response:"
echo "$response"
