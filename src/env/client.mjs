/* eslint-disable prettier/prettier */
import { createEnv } from '@t3-oss/env-nextjs'
import z from 'zod'

export const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_ENV: z.enum(['development', 'test', 'production']),
    NEXT_PUBLIC_MAGIC_API_KEY: z.string(),
    NEXT_PUBLIC_ALCHEMY_GAS_MANAGER_POLICY_ID: z.string()
  },
  runtimeEnv: {
    NEXT_PUBLIC_ENV: process.env.NODE_ENV ?? 'development',
    NEXT_PUBLIC_MAGIC_API_KEY: 'pk_live_2D0AA46ED4A4A8B6',
    NEXT_PUBLIC_ALCHEMY_GAS_MANAGER_POLICY_ID: '061a4f08-cd85-4386-8114-ece82ad2b284'
  }
})
