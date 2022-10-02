<template>
  <div class="card-body pb-2">
    <div class="text-xl font-bold">CREATE AN ACCOUNT</div>
    <div class="text-md">Please enter your details.</div>
    <div class="flex flex-col w-full border-opacity-50">
      <div class="form-control grid">
        <label class="label">
          <span class="label-text">Email Address*</span>
        </label>
        <input
          type="text"
          placeholder="Email Address*"
          class="input input-bordered"
        />
      </div>
      <div class="form-control grid mt-4">
        <label class="label">
          <span class="label-text">Password*</span>
        </label>
        <input
          type="text"
          placeholder="Password*"
          class="input input-bordered"
        />
      </div>
      <div class="form-control grid mt-4">
        <label class="label">
          <span class="label-text">Password*</span>
        </label>
        <input
          type="text"
          placeholder="Confirm Password*"
          class="input input-bordered"
        />
      </div>
      <div class="form-control grid mt-4">
        <label class="label">
          <span class="label-text">Password*</span>
        </label>
        <input
          type="text"
          placeholder="Firstname*"
          class="input input-bordered"
        />
      </div>
      <div class="form-control grid mt-4">
        <label class="label">
          <span class="label-text">Password*</span>
        </label>
        <input
          type="text"
          placeholder="Lastname*"
          class="input input-bordered"
        />
      </div>
      <div class="form-control grid mt-4">
        <label class="label">
          <span class="label-text">Password*</span>
        </label>
        <input
          type="text"
          placeholder="Mobile No."
          class="input input-bordered"
        />
      </div>
      <div class="form-control grid mt-4 mb-4">
        <div class="rounded-box">
          <label class="label cursor-pointer">
            <input type="checkbox" checked="checked" class="checkbox" />
            <span class="label-text pl-2"
              >By signing in, iagree to the
              <a href="#" class="label-text-alt link link-hover font-bold">
                Privacy Policy
              </a>
              |
              <a href="#" class="label-text-alt link link-hover font-bold">
                terms & Confitions.
              </a>
            </span>
          </label>
        </div>
        <!-- <div class="flex w-full"> -->

        <!-- <div class="divider divider-horizontal">OR</div> -->
        <!-- <div class="grid flex-grow rounded-box justify-end">
                      <label class="label">
                        <a
                          href="#"
                          class="label-text-alt link link-hover font-bold"
                          >Forgot password?</a
                        >
                      </label>
                    </div> -->
        <!-- </div> -->
      </div>
    </div>
    <div class="form-control">
      <button
        class="
          btn btn-xs
          sm:btn-sm
          md:btn-md
          lg:btn-lg
          bg-black
          text-white
          border-black
          w-full
        "
        @click="$emit('changetab', 'verify-email')"
      >
        Submit
      </button>
    </div>
  </div>
</template>