<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('materials', function (Blueprint $table) {
            $table->id();

            //$table->foreignId('writer_id')->constrained('writers')->onDelete('cascade');
            $table->string("writer");

            //$table->foreignId('category_id')->constrained('category')->onDelete('cascade');
            $table->string("category");

            $table->string('title');
            $table->string('doi');
            $table->text('description');
            $table->date('publication_data');
            $table->string('cover');
            $table->string('doc');
            $table->unsignedInteger('page_number');
            $table->string('type');
            $table->string('status');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materials');
    }
};
