import { Controller } from '@nestjs/common';
import { Body, Post, Req, UseGuards } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto): Promise<void> {
        return this.authService.signUp(authcredentialsDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> { 
        return this.authService.signIn(authCredentialsDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req) {
        console.log('req', req);
    }
}
