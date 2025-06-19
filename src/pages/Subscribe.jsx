import React from 'react'

const Subscribe = () => {
  return (
    <div class="text-center px-4">
        <p class="text-sm font-semibold text-black mb-2">
          Join the Chlothzy Style Community
        </p>
        <p class="text-2xl font-medium text-black">
          Subscribe now &amp; get 20% off
        </p>
        <p class="text-black mt-3">
          ThinKart Fashion – Where Style Meets Confidence.
        </p>
        <form class="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
          <input
            class="w-full sm:flex-1 outline-none py-3"
            type="email"
            placeholder="Enter your email"
            required=""
          />
          <button type="submit" class="bg-black text-white text-xs px-10 py-4">
            SUBSCRIBE
          </button>
        </form>
      </div>
  )
}

export default Subscribe
