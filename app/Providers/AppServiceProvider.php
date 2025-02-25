<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Http\Request;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Rate Limiter Global untuk semua request di web.php
    RateLimiter::for('global', function (Request $request) {
        return Limit::perMinute(60)->by(optional($request->user())->id ?: $request->ip());
    });

    // Rate Limiter untuk API
    RateLimiter::for('api', function (Request $request) {
        return Limit::perMinute(100)->by(optional($request->user())->id ?: $request->ip());
    });

    RateLimiter::for('global', function (Request $request) {
        return Limit::perMinute(60)
            ->by(optional($request->user())->id ?: $request->ip())
            ->response(function () {
                return response()->json('Too Many Requests, Chill!!',429);
            });
    });
    

        Vite::prefetch(concurrency: 3);
    }
}
