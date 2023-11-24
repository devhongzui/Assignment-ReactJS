<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\Province;
use App\Models\SubDistrict;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class ProfileController extends Controller
{
    /**
     * @return View
     */
    public function edit(): View
    {
        $countries = $this->getCountries();
        $provinces = Province::getProvincesOption();
        $districts = District::getDistrictsOption();
        $sub_districts = SubDistrict::getSubDistrictsOption();

        return view('profile.edit')->with([
            'countries' => $countries,
            'provinces' => $provinces,
            'districts' => $districts,
            'sub_districts' => $sub_districts,
        ]);
    }

    /**
     * @return array
     */
    protected function getCountries(): array
    {
        $supported_locales = LaravelLocalization::getSupportedLocales();
        $country_code = array_column($supported_locales, 'country_code');
        $country_name = array_column($supported_locales, 'country_name');
        return array_combine($country_code, $country_name);
    }

    /**
     * Delete the user's account.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function destroy(Request $request): JsonResponse
    {
        auth()->user()->delete();
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'redirect' => route('home'),
            'message' => __('Account deleted successfully!')
        ]);
    }
}
