<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\EnsureEmailIsVerified as Middleware;
use Illuminate\Http\Request;

class EnsureEmailIsVerified extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @param string|null $redirectToRoute
     * @return mixed
     */
    public function handle($request, Closure $next, $redirectToRoute = null): mixed
    {
        return $request->user()
            ? parent::handle($request, $next, $redirectToRoute)
            : $next($request);
    }
}
