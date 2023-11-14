<a href="{{ route('home') }}" class="navbar-brand d-flex align-items-center" role="link"
   aria-label="{{ $web->site_name }}">
    <img src="{{ asset('logo.png') }}" alt="{{ $web->site_name }}" class="object-fit-contain me-2"
         style="width: 40px; height: 40px;">
    <h1 class="mb-0">{!! $web->site_name_html !!}</h1>
</a>
