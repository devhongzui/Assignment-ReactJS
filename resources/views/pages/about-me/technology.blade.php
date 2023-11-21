<section class="row mb-5">
    <div class="col-xl-6 order-xl-1">
        <h5>@lang('Technology')</h5>

        @php
            $framework = [
                [
                    'image' => asset('storage/images/iconscout/magento.png'),
                    'title' => 'Magento 2',
                    'description' => __('Powerful, flexible e-commerce platform'),
                    'progress' => 75,
                ],
                [
                    'image' => asset('storage/images/iconscout/laravel.png'),
                    'title' => 'Laravel',
                    'description' => __('Powerful web application development framework'),
                    'progress' => 60,
                ],
                [
                    'image' => asset('storage/images/iconscout/bootstrap.png'),
                    'title' => 'Bootstrap',
                    'description' => __('Reliable and flexible web development framework'),
                    'progress' => 75,
                ],
            ];
        @endphp
        <h3>@lang('Programming framework')</h3>
        <div class="row">
            @foreach ($framework as $data)
                <div class="col-xxl-6">
                    @include('pages.about-me.technology.progress', $data)
                </div>
            @endforeach
        </div>

        @php
            $library = [
                [
                    'image' => asset('storage/images/iconscout/jquery.png'),
                    'title' => 'JQuery',
                    'description' => __('JavaScript library that optimizes DOM processing'),
                    'progress' => 85,
                ],
                [
                    'image' => asset('storage/images/iconscout/nodejs.png'),
                    'title' => 'NodeJs',
                    'description' => __('High-performance server-side JavaScript code execution environment'),
                    'progress' => 60,
                ],
            ];
        @endphp
        <h3>@lang('Library')</h3>
        <div class="row">
            @foreach ($library as $data)
                <div class="col-xxl-6">
                    @include('pages.about-me.technology.progress', $data)
                </div>
            @endforeach
        </div>

        @php
            $database = [
                [
                    'image' => asset('storage/images/iconscout/mysql.png'),
                    'title' => 'MySQL',
                    'description' => __('Popular, open source database management system'),
                    'progress' => 80,
                ],
                [
                    'image' => asset('storage/images/iconscout/mongodb.png'),
                    'title' => 'MongoDB',
                    'description' => __('NoSQL database management system, flexible JSON storage'),
                    'progress' => 50,
                ],
            ];
        @endphp
        <h3>@lang('Database')</h3>
        <div class="row">
            @foreach ($database as $data)
                <div class="col-xxl-6">
                    @include('pages.about-me.technology.progress', $data)
                </div>
            @endforeach
        </div>

        <h3>@lang('Others')</h3>
        @include('pages.about-me.technology.progress', [
            'image' => asset('storage/images/iconscout/graphql.png'),
            'title' => 'GraphQL',
            'description' => __('Flexible and efficient data query language'),
            'progress' => 75,
        ])
    </div>

    <div class="col-xl-6 d-flex align-items-center order-xl-0">
        <img data-src="{{ asset('storage/images/freepik/7055173.jpg') }}" alt="@lang('Technology')"
             class="rounded-2 w-100 object-fit-cover" style="height: 500px;">
    </div>
</section>
