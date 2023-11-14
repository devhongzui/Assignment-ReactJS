<section class="bg-dark-subtle rounded-2 mb-5 px-2 py-3">
    <h3 class="text-center">@lang('Personal skills')</h3>
    @php
        $cards = [
            [
                'default_image' => asset('logo.png'),
                'image' => asset('storage/images/freepik/7054831.jpg'),
                'title' => __('Web Development'),
                'description' => __('Use experience handling Framework, Library Back-End and Front-End in designing, deploying and maintaining Website and Webapp'),
            ],
            [
                'default_image' => asset('logo.png'),
                'image' => asset('storage/images/freepik/7054834.jpg'),
                'title' => __('Database Optimization'),
                'description' => implode(' ', [__('Provide solutions for data management and system monitoring.'), __('Report data security risks and remediate known security vulnerabilities.')]),
            ],
            [
                'default_image' => asset('logo.png'),
                'image' => asset('storage/images/freepik/7054831.jpg'),
                'title' => __('Ecommerce'),
                'description' => implode(' ', [__('Create a roadmap for product and customer data management.'), __('Consulting and proposing solutions to team members.')]),
            ],
        ];
    @endphp
    <div class="row">
        @foreach ($cards as $card)
            <div class="col-xl-4 mt-3 mb-5">
                @include('pages.about-me.skill.card', $card)
            </div>
        @endforeach
    </div>
</section>
