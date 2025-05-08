let env = process.env.ENV 
if(!env) env = '1'

export const configEnv = {
  ...((env === '1') && {
    baseURL: process.env.baseURL
  }),
  ...((env === '2') && {
    baseURL: 'https://hybs.premierturk.com/',
  }),
  ...((env === '3') && {
    baseURL: 'https://testhbys.premierturk.com/',
  }),
}