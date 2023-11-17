<?php

namespace App\Http\Responses\Profile;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Laravel\Fortify\Contracts\TwoFactorLoginResponse;

class TwoFactorEnabledResponse implements TwoFactorLoginResponse
{
    /**
     * Create an HTTP response that represents the object.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function toResponse($request): JsonResponse
    {
        return response()->json([
            'message' => __('Scan the QR code and enter the confirmation code to complete'),
            'qr_code' => [
                'svg' => $request->user()->twoFactorQrCodeSvg(),
                'url' => $request->user()->twoFactorQrCodeUrl(),
            ],
        ]);
    }
}
