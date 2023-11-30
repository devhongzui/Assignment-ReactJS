<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email', 50)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('phone_number', 12)->unique()->nullable();
            $table->timestamp('phone_number_verified_at')->nullable();
            $table->string('password', 60);
            $table->rememberToken();
            $table->string('name', 50);
            $table->string('avatar', 200);
            $table->date('birthdate')->nullable();
            $table->tinyInteger('gender')->nullable();
            $table->string('address_detail', 100)->nullable();
            $table->bigInteger('province_code')->nullable();
            $table->bigInteger('district_code')->nullable();
            $table->bigInteger('sub_district_code')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
