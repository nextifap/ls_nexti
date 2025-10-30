<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('livros', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('autor');
            $table->string('categoria');
            $table->string('capa_path')->nullable();
            $table->string('arquivo_path')->nullable();
            $table->timestamp('data_publicacao')->useCurrent();
            $table->string('status')->default('aprovado');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('livros');
    }
};

