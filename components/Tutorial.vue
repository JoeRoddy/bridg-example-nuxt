<script>
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import db from "bridg/app/client/db";

export default {
  data: () => ({
    users: [],
  }),
  async fetch() {
    this.users = await db.user.findMany({ include: { blogs: true } });
  },
  fetchOnServer: false,
};
</script>

<template>
  <div>
    hello world!!
    <pre>{{ JSON.stringify(users, null, 2) }}</pre>
  </div>
</template>
