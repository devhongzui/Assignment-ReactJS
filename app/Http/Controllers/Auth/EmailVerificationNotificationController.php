<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Laravel\Fortify\Contracts\EmailVerificationNotificationSentResponse;

class EmailVerificationNotificationController extends \Laravel\Fortify\Http\Controllers\EmailVerificationNotificationController
{
    /**
     * Send a new email verification notification.
     *
     * @param Request $request
     * @return JsonResponse|\App\Http\Responses\Auth\EmailVerificationNotificationSentResponse
     */
    public function store(Request $request): JsonResponse|\App\Http\Responses\Auth\EmailVerificationNotificationSentResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json([
                'message' => __('The account has previously authenticated email')
            ]);
        }

        $request->user()->sendEmailVerificationNotification();

        return app(EmailVerificationNotificationSentResponse::class);
    }
}
