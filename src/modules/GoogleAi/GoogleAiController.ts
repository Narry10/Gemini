import { Controller, Get, Query, NotFoundException, InternalServerErrorException, Post, Body } from '@nestjs/common';
import { GoogleAiService } from 'src/shares/sevicers/GoogleAiService';


@Controller('googleAi')
export class GoogleAiController {
  constructor(private readonly googleAiService: GoogleAiService) {}

  @Post('generateBase')
  async generate(@Body('prompt') prompt: string): Promise<string> {
    try {
      const generatedText = await this.googleAiService.generateText(prompt);
      if (!generatedText) {
        throw new NotFoundException('Unable to generate text.');
      }
      return generatedText;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Internal server error');
    }
  }

  @Post('generateGemini')
  async generateGeminiPro(@Body('prompt') prompt: string): Promise<string> {
    try {
      const generatedGeminiProContent = await this.googleAiService.generateGeminiPro(prompt);
      if (!generatedGeminiProContent) {
        throw new NotFoundException('Unable to generate Gemini Pro content.');
      }
      return generatedGeminiProContent;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Internal server error');
    }
  }
}
