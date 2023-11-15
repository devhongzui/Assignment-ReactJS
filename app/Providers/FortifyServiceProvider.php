<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Laravel\Fortify\Contracts\LogoutResponse as LogoutResponseContract;
use Laravel\Fortify\Contracts\RegisterResponse as RegisterResponseContract;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Http\Responses\LoginResponse;
use Laravel\Fortify\Http\Responses\LogoutResponse;
use Laravel\Fortify\Http\Responses\RegisterResponse;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->overrideLoginResponse();
        $this->overrideRegisterResponse();
        $this->overrideLogoutResponse();
    }

    /**
     * @return void
     */
    protected function overrideLoginResponse(): void
    {
        $this->app->instance(
            LoginResponse::class,
            new class implements LoginResponseContract {
                /**
                 * Create an HTTP response that represents the object.
                 *
                 * @param Request $request
                 * @return JsonResponse
                 */
                public function toResponse($request): JsonResponse
                {
                    return response()->json([
                        'reload' => true,
                        'message' => __('Logged in successfully!')
                    ]);
                }
            }
        );
    }

    /**
     * @return void
     */
    protected function overrideRegisterResponse(): void
    {
        $this->app->instance(
            RegisterResponse::class,
            new class implements RegisterResponseContract {
                /**
                 * Create an HTTP response that represents the object.
                 *
                 * @param Request $request
                 * @return JsonResponse
                 */
                public function toResponse($request): JsonResponse
                {
                    return response()->json([
                        'reload' => true,
                        'message' => __('Register successfully!')
                    ]);
                }
            }
        );
    }

    /**
     * @return void
     */
    protected function overrideLogoutResponse(): void
    {
        $this->app->instance(LogoutResponse::class,
            new class implements LogoutResponseContract {
                /**
                 * Create an HTTP response that represents the object.
                 *
                 * @param Request $request
                 * @return JsonResponse
                 */
                public function toResponse($request): JsonResponse
                {
                    return response()->json([
                        'reload' => true,
                        'message' => __('Signed out successfully!')
                    ]);
                }
            }
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Fortify::loginView(
            fn(Request $request): View => $request->ajax()
                ? view('auth.lazy.login')
                : view('auth.login')->with('login_page', true)
        );

        Fortify::registerView(
            fn(Request $request): View => $request->ajax()
                ? view('auth.lazy.register')
                : view('auth.register')->with('register_page', true)
        );

        Fortify::createUsersUsing(CreateNewUser::class);

        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);

        RateLimiter::for('login', function (Request $request) {
            $throttleKey = Str::transliterate(Str::lower($request->input(Fortify::username())) . '|' . $request->ip());

            return Limit::perMinute(5)->by($throttleKey);
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });
    }
}
