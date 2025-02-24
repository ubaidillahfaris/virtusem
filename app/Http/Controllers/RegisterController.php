<?php

namespace App\Http\Controllers;

use App\Events\UserRegistered;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function store(RegisterRequest $request){
        $register = $request->validated();

        $user = User::create([
            'name' => $register['name'],
            'email' => $register['email'],
            'password' => Hash::make($register['password']),
        ]);


        event(new UserRegistered($user));

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user
        ], 201);

    }
}
