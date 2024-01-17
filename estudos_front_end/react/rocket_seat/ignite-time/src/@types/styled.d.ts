import 'styled-components';
import { defaultTheme } from "../../src/styles/themes/default";

//Está guardando dentro de uma variavel
type themeType = typeof defaultTheme

//Aqui esta criando uma tipagem para o styled-components,por isso importou la em cima,porque esta pegando o que ja tem e colocando alguma coisa nova
declare module 'styled-components' {
    export interface DefaultTheme extends themeType{}
}
