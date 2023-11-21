<section class="row bg-dark-subtle rounded-2 mb-5 py-3">
    <div class="col-xl-6 order-xl-1">
        <h5>@lang('Personal information')</h5>
        <h3>@lang('PHP programmer')</h3>
        <div class="mb-3 mb-xl-5">
            <p class="mb-1">@lang('Am a software developer with significant experience in PHP programming.')</p>
            <p class="mb-1">@lang('With Laravel, I have the ability to build diverse web applications and manage databases effectively.')</p>
            <p class="mb-1">@lang('At the same time, I worked with Magento 2 to customize and develop e-commerce features.')</p>
        </div>
        <div class="row mb-3">
            <div class="col-xxl-7">
                <div class="row mb-2">
                    <strong class="col-12 col-xxl-4">@lang('Full name')</strong>
                    <div class="col-12 col-xxl-8">{{ config('app.dev_name') }}</div>
                </div>
                <div class="row mb-2">
                    <strong class="col-12 col-xxl-4">@lang('Email')</strong>
                    <a href="mailto:{{ config('app.dev_mail') }}" aria-label="@lang('Email')"
                       class="col-12 col-xxl-8">
                        {{ config('app.dev_mail') }}
                    </a>
                </div>
            </div>
            <div class="col-xxl-5">
                <div class="row mb-2">
                    <strong class="col-12 col-xxl-5">@lang('Home town')</strong>
                    <div class="col-12 col-xxl-7">@lang('Hanoi, Vietnam')</div>
                </div>
                <div class="row mb-2">
                    <strong class="col-12 col-xxl-5">@lang('Phone number')</strong>
                    <a href="tel:{{ config('app.dev_phone') }}" aria-label="@lang('Phone number')"
                       class="col-12 col-xxl-7">
                        {{ config('app.dev_phone') }}
                    </a>
                </div>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-xxl-7">
                <div class="row">
                    <strong class="col-12 col-xl-6 col-xxl-4 mb-2">@lang('Socials')</strong>
                    @php
                        $socials = [
                            (object) [
                                'link' => 'https://www.facebook.com/devhongzui',
                                'image' => asset('storage/images/flaticon/facebook.png'),
                                'label' => __('Social network :name', ['name' => 'Facebook']),
                            ],
                            (object) [
                                'link' => 'https://www.twitter.com/devhongzui',
                                'image' => asset('storage/images/flaticon/twitter.png'),
                                'label' => __('Social network :name', ['name' => 'Twitter']),
                            ],
                            (object) [
                                'link' => 'https://www.instagram.com/devhongzui',
                                'image' => asset('storage/images/flaticon/instagram.png'),
                                'label' => __('Social network :name', ['name' => 'Instagram']),
                            ],
                            (object) [
                                'link' => 'https://www.github.com/devhongzui',
                                'image' => asset('storage/images/flaticon/github.png'),
                                'label' => __('Social network :name', ['name' => 'Github']),
                            ],
                            (object) [
                                'link' => 'https://www.linkedin.com/in/devhongzui',
                                'image' => asset('storage/images/flaticon/linkedin.png'),
                                'label' => __('Social network :name', ['name' => 'Linkedin']),
                            ],
                        ];
                    @endphp
                    <div class="col-12 col-xl-6 coll-xxl-8 d-flex">
                        @foreach ($socials as $social)
                            <div class="mb-2 me-2">
                                <a href="{{ $social->link }}" target="_blank" role="link"
                                   aria-label="{{ $social->label }}">
                                    <img data-src="{{ $social->image }}" alt="{{ $social->label }}" style="width: 30px">
                                </a>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-xl-6 d-flex justify-content-center">
        <img data-src="{{ asset('storage/images/freepik/7036172.jpg') }}" alt="@lang('Personal information')"
             class="rounded-2 object-fit-cover img-fluid" style="height: 500px;">
    </div>
</section>
