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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('image', 200);
            $table->string('title', 100);
            $table->text('description');
            $table->timestamps();
        });

        Schema::create('channels', function (Blueprint $table) {
            $table->id();
            $table->string('url', 24)->unique();
            $table->string('title', 100);
            $table->text('description');
            $table->string('custom_url', 50)->nullable();
            $table->timestamp('publish_at');
            $table->timestamps();
        });

        Schema::create('subjects', function (Blueprint $table) {
            $table->id();
            $table->foreignId('course_id')->references('id')->on('courses');
            $table->foreignId('channel_id')->references('id')->on('channels');
            $table->string('url', 34)->unique();
            $table->string('title', 100);
            $table->text('description');
            $table->timestamp('publish_at');
            $table->timestamps();
        });

        Schema::create('lessons', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subject_id')->references('id')->on('subjects');
            $table->foreignId('channel_id')->references('id')->on('channels');
            $table->string('url', 11)->unique();
            $table->string('title', 100);
            $table->text('description');
            $table->timestamp('publish_at');
            $table->timestamps();
        });

        Schema::create('thumbnails', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subject_id')->nullable()->references('id')->on('subjects');
            $table->foreignId('lesson_id')->nullable()->references('id')->on('lessons');
            $table->foreignId('channel_id')->nullable()->references('id')->on('channels');
            $table->tinyInteger('type')->unsigned();
            $table->string('url', 200);
            $table->mediumInteger('width')->unsigned();
            $table->mediumInteger('height')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('thumbnails');
        Schema::dropIfExists('lessons');
        Schema::dropIfExists('subjects');
        Schema::dropIfExists('channels');
        Schema::dropIfExists('courses');
    }
};
