<template>
    <div class="mobile-type">
        <img src="/pwa-512x512.png" class="mb-3 rounded-md" alt="" srcset="">
        <div>
            Please turn on your internet.
        </div>
    </div>

</template>

<style>
.mobile-type {
    height: 100vh;
    font-size: 1rem;
    line-height: 1.75rem;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
    background-color: #ffffff;
    color: #000000;
    font-weight: 600;
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-wrap: nowrap;
    -webkit-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    padding-right: 1rem;
    padding-left: 1rem;

}

.mobile-type img {
    width: 16rem;
    height: 8rem;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
}
</style>