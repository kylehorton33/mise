<form
  action="?/login"
  method="post"
  class="flex flex-col h-full justify-center items-center space-y-4"
>
  <input
    type="email"
    aria-label="email"
    name="email"
    placeholder="Email"
    class="input input-bordered input-primary w-full max-w-xs"
  />
  <input
    type="password"
    aria-label="password"
    name="password"
    placeholder="Password"
    class="input input-bordered input-primary w-full max-w-xs"
  />
  <button type="submit" class="btn btn-primary">Login</button>
</form>
