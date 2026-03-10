import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('profiles')
export class ProfilesController {
  // This is where all our routes are defined
  // GET /profiles
  @Get()
  //   findAll() {
  //     return [];
  //   }
  // example 1 of query
  //   findAll(@Query('age') age: number) {
  //     return [{ age }];
  //   }

  // example 2 of query
  findAll(@Query('location') location: string) {
    return [{ location }];
  }

  // example of param
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }
  // GET /profiles/:id
  // POST /profiles
  // PUT /profiles/:id
  // DELETE /profiles/:id
}
