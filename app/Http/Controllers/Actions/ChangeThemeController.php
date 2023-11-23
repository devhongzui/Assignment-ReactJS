<?php

namespace App\Http\Controllers\Actions;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ChangeThemeController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $data_bs_theme = $request->session()->get('data-bs-theme', 'dark') === 'dark' ? 'light' : 'dark';

        $request->session()->put('data-bs-theme', $data_bs_theme);

        return response()->json([
            'message' => __('Changed theme successfully!')
        ]);
    }
}
