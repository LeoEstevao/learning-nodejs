# TINYMCE
>Download TinyMCE (Self-Hosted version)
    https://www.tiny.cloud/get-tiny/self-hosted/

>Extract tinyMCE folder (second subfolder) to you public folder> Import the script (tinymce.min.js) in the html you wish > put an ID into the textarea you wish to include tinyMCE > and create the script

```js
// Configurando tinyMCE
tinymce.init({
    // SELETOR em que o tinyMCE será integrado
    selector: "#tinymceText",
    // LINGUAGEM da interface (Tem que baixar o pacote de tradução, e mover para a pasta 'langs')
    language: 'pt_BR',
    // PLUGINS que adicionaremos no nosso tinyMCE (separados por um espaco dentro de um array)
    plugins: [
        'advlist autolink link image lists print preview hr searchreplace wordcount fullscreen inserdatetime media save table paste',
    ]
    // https://www.tiny.cloud/docs/demo/file-picker/ USAR FILE PICKER PARA ADICIONAR IMAGENS LOCAIS
});
```

>Documentation for more details
    https://www.tiny.cloud/docs/general-configuration-guide/

# Mudar linguagem do tinyMCE
>Download Language Package
    https://www.tiny.cloud/get-tiny/language-packages/

>Move the downloaded file 'lang.js' to the folder '/Langs'

>Add the config inside tinymce.init()
    language: 'pt_BR',
