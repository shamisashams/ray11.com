<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeambTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teamb_translations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('teamb_id')->unsigned();
            $table->string('locale')->index();

            $table->string('name')->nullable();
            $table->string('surname')->nullable();
            $table->string('position')->nullable();


            $table->unique(['teamb_id', 'locale']);
            $table->foreign('teamb_id')
                ->references('id')
                ->on('teamb')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teamb_translations');
    }
}
