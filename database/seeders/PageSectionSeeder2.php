<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PageSection;
use App\Models\Page;

class PageSectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        //




        //print_r($pageSections);
        //dd(3);

        $page = Page::where('key', 'aboutus')->first();



        $ins = [
            ['page_id' => $page->id]
        ];

        //dd($ins);
        PageSection::insert($ins);
    }
}
