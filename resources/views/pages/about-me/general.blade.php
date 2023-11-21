@vite('resources/js/pages/about-me/general.js')

<section class="row align-items-center mb-5">
    <div class="col-xl-6">
        <h3>@lang('Hello, I am :name', ['name' => config('app.dev_name')])</h3>
        <div class="h1 type-write" data-word="[&quot;<strong>Developer</strong>, &quot;, &quot;Freelancer&quot;]"></div>
        <p>@lang('I love the Information Technology field and have a passion for Web Programming.')</p>
    </div>
    <div class="col-xl-6 d-xl-flex justify-content-xl-end">
        <img data-src="{{ asset('storage/images/freepik/7036084.jpg') }}" alt="@lang('Overview')"
             class="rounded-2 object-fit-cover img-fluid" style="height: 500px;">
    </div>
</section>
