<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title')</title>

        @vite(['resources/js/app.js'])
    </head>
    <body class="font-sans antialiased bg-mainBackground">
        <div class="w-full min-h-screen relative overflow-hidden flex justify-center items-start">
            <div class="absolute opacity-15 md:opacity-20 bg-accent w-96 h-80 -top-12 -left-48 blur-3xl rounded-full z-0"></div>
            <div class="absolute opacity-10 md:opacity-10 bg-accent w-96 h-80 bottom-10 -right-48 blur-3xl rounded-full z-0">
            </div>
            <div class="absolute group-hover:blur-sm transition duration-300 delay-75 
            ease-in-out top-0 z-0 object-cover opacity-20 w-full h-screen"
                :style="`background-image: url('storage/Line BG.svg');`" />

            <div class="w-full min-h-96 flex flex-col justify-center items-center space-y-6">
                <div class="flex flex-col justify-center items-center space-y-2">
                    <p class="text-4xl text-white font-bold">Error</p>
                    <p class="text-2xl text-white font-bold">@yield('code')</p>
                </div>
            </div>

        </div>
    </body>
</html>
