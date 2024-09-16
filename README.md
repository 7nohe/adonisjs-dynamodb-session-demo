## Setup

```bash
cp .env.example .env
npm install
docker compose up -d
```

To use the DynamoDB feature, you need to clone the [`@adonisjs/session`](https://github.com/adonisjs/session) repository, checkout to this [PR](https://github.com/adonisjs/session/pull/87), run `npm link` within it, then return to this project and run `npm link @adonisjs/session`.

## DynamoDB

By default, it is set to use DynamoDB Local. You can check and modify tables using DynamoDB Admin (localhost:8002). If you want to use DynamoDB on AWS, change the related environment variables in the .env file.

- `DYNAMODB_SESSION_TABLE`:Your DynamoDB table name for sessions. The default name is `Session`.
- `DYNAMODB_ENDPOINT`: Your DynamoDB endpoint. This is for connecting to DynamoDB Local. Generally, you do not need to set this value.
- `AWS_ACCESS_KEY_ID`: Your AWS access key ID.
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key.
- `AWS_REGION`: Your AWS region.
