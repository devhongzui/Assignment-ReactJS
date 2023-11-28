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
            if ($request->expectsJson()) {
                $request->session()->put([
                    'previous_url_confirm_password' => url()->previous()
                ]);

                return response()->json(
                    [
                        'redirect' => route('password.confirm'),
                        'message' => __('Password confirmation required.'),
                    ],
                    423
                );
            } else {
                $request->session()->put([
                    'previous_url_confirm_password' => url()->current()
                ]);

                return redirect(status: 423)->route('password.confirm');
            }

        return $next($request);
    }
}
