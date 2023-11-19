<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RequirePassword extends \Illuminate\Auth\Middleware\RequirePassword
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @param string|null $redirectToRoute
     * @param string|int|null $passwordTimeoutSeconds
     * @return mixed
     */
    public function handle($request, Closure $next, $redirectToRoute = null, $passwordTimeoutSeconds = null): mixed
    {
        if ($this->shouldConfirmPassword($request, $passwordTimeoutSeconds))
            return response()->json(
                [
                    'redirect' => route('password.confirm'),
                    'message' => __('Password confirmation required.'),
                ],
                423
            );

        return $next($request);
    }
}