module Jekyll

    class GalleryGenerator < Jekyll::Generator

       
        def generate(site)
            # For each collection named gallery or summat:
            # 
            # so - I was gonna use this generator to take in a certain filepath,
            #  and then spit out something thats in html or something
            
            gallery_config = site.config['galleries'] || {}
            folder_path = gallery_config['folder']

            site.static_files
        end
    end
end
