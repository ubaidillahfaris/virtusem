<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mail</title>
    @vite(['resources/js/app.js'])
</head>

<body class="">
    <div class="w-full h-screen flex items-center justify-center">
        <div class="rounded-lg shadow-lg">
            <h1 class="text-2xl font-bold bg-red-700 text-white rounded-t-lg p-4">Hello, {{ $user->name }}!</h1>

            <div class="p-6 flex flex-col space-y-3">
                <img src="{{asset('storage/Laravel.png')}}" alt="logo" class="w-16 h-16">
                <div>
                    <p class="text-lg mt-4">You have successfully registered with us.</p>
                </div>
                <div>
                    <p class="">Your account details are as follows:</p>
                <p class="">Email: {{ $user->email }}</p>
                </div>
                <div>
                    <p>Thank you for registering with us.</p>
                    <p>Best regards, Faruq</p>
                </div>
            </div>

            <div class="bg-blue-600 p-2 text-white">
                <p class="text-sm">If you did not create an account, please ignore this email.</p>
                <a href="https://virtusem.id">virtusem.id</a>
            </div>
        </div>
    </div>
</body>

</html>