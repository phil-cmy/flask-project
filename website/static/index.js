function deleteNote(noteId) {
    fetch(`/delete-note/${noteId}`, {
      method: "POST",
      body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
      window.location.href = "/";
    });
  }