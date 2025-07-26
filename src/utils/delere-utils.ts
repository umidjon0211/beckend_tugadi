import * as fs from 'fs';
import * as path from 'path';

export function deleteMovieFile(filePathToDelete: string) {
  const fullPath = path.resolve(filePathToDelete);

  if (fs.existsSync(fullPath)) {
    fs.unlink(fullPath, (err) => {
      if (err) {
        console.error('❌ Ochirilmadi:', err.message);
      } else {
        console.log('✅ Ochirildi:', fullPath);
      }
    });
  } else {
    console.warn('topilmadi:', fullPath);
  }
}
