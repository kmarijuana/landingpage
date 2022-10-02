<template>
  <div class="card-body pb-2">
    <div class="text-xl font-bold">Forgot password</div>
    <div class="text-md">
      Enter your registered email below to receive password reset instruction.
    </div>
    <div class="flex flex-col w-full border-opacity-50">
      <div class="form-control grid">
        <!-- <label class="label">
                  <span class="label-text">Email Address*</span>
                </label> -->
        <input
          type="text"
          placeholder="Email Address*"
          class="input input-bordered"
        />
      </div>
    </div>
    <div class="form-control mt-2">
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
        @click="$emit('changetab','verify-email')"
      >
        Reset password
      </button>
    </div>
  </div>
</template>