<?php

namespace App\Actions\Fortify;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Laravel\Fortify\Events\TwoFactorAuthenticationChallenged;

class RedirectIfTwoFactorAuthenticatable extends \Laravel\Fortify\Actions\RedirectIfTwoFactorAuthenticatable
{
    /**
     * Get the two factor authentication enabled response.
     *
     * @param Request $request
     * @param mixed $user
     * @return JsonResponse
     */
    protected function twoFactorChallengeResponse($request, $user): JsonResponse
    {
        $request->session()->put([
            'login.id' => $user->getKey(),
            'login.remember' => $request->boolean('remember'),
        ]);

        TwoFactorAuthenticationChallenged::dispatch($user);

        return response()->json([
            'redirect' => route('two-factor.login'),
            'message' => __('Complete two-step verification to sign in')
        ]);
    }
}
