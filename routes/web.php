<?php

use App\Http\Controllers\ProfileController;
use App\Mail\WelcomeEmail;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware(['throttle:global'])->group(function () {
        
        Route::get('mail',function(){
            $user = User::first();
            return new WelcomeEmail($user);
        });
        
        
        Route::get('/{any}',  function () {
            return Inertia::render('App', [
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION,
            ]);
        })->where('any', '.*');
        
        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->middleware(['auth', 'verified'])->name('dashboard');
        
        Route::middleware('auth')->group(function () {
            Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
            Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
            Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        });

    
});

require __DIR__.'/auth.php';