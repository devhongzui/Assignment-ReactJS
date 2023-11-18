<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\EnsureEmailIsVerified as Middleware;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class EnsureEmailIsVerified extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @param string|null $redirectToRoute
     * @return Response|JsonResponse|RedirectResponse|StreamedResponse|null
     */
    public function handle($request, Closure $next, $redirectToRoute = null): Response|JsonResponse|RedirectResponse|StreamedResponse|null
    {
        return $request->user()
            ? parent::handle($request, $next, $redirectToRoute)
            : $next($request);
    }
}
